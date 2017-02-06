function lurl (str, opts) {

  // splits a string into the components of a url and then
  // removes all valid characters that a url can contain
  // from each component, if there are any left then it
  // must be an invalid url

  if (typeof str !== "string") {

    return false;

  }
  
  var protocol = (str.match(/^([a-z]+):/i)?str.match(/^([a-z]+):/i)[1]:null),
      domain   = str.replace(protocol, "").replace(/(:)?(\/\/)?/i, "").split('/')[0].split('?')[0] || null,
      path     = str.replace(protocol, "").replace(/(:)?(\/\/)/,"").replace(domain, "").split('/').slice(1).join('/').split('?')[0] || null,
      qs       = str.split('?')[1] || null;

  // do we have a domain at least?
  if (domain === null) {

    return false;

  }

  // now we have our bits we can test for a valid url
  var regex         = new RegExp("[a-z0-9-\\._\\\~:\\/\\?#\\[\\]@\\!\\$&'\\(\\)\\*\\+,;=%]+", "ig"),
      domain_regex  = new RegExp("[a-z0-9-\\.:]+", "ig")

  // remove all the chars from the protocol
  if (protocol !== null && protocol.replace(regex, "") !== "") {

    return false;

  }

  // remove all the chars from the domain
  if (domain.replace(domain_regex, "") !== "" || domain.match(/^-/) || domain.match(/-$/) || 
      (typeof opts === "object" && opts.allow_local === false && domain.match(/[a-z0-9]\.[a-z0-9]/ig) === null)) {

    return false;

  }

  // remove all the chars from the path
  if (path !== null && path.replace(regex, "") !== "") {

    return false;

  }

  // remove all the chars from the query string
  if (qs !== null && qs.replace(regex, "") !== "") {

    return false;

  }

  // got here so we must be gravy
  return true;

}