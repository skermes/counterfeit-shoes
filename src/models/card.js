var urlName = function(name) {
  return name.toLocaleLowerCase().replace(/[^a-z]/g, '');
};

var portraitUrlPrefix = "http://sites.cdn.stoneblade.com/cardart/levels-low/";
var portraitUrlSuffix = "-3-std.png";
var portraitUrl = function(name) {
  return portraitUrlPrefix + urlName(name) + portraitUrlSuffix;
}

var combinedUrlPrefix = "http://sites.cdn.stoneblade.com/cardart/combined-low/";
var combinedUrlSuffix = "-combined-std.png";
var combinedUrl = function(name) {
  return combinedUrlPrefix + urlName(name) + combinedUrlSuffix;
}

// Because of how the urls are formatted (see urlName), there are many
// variations on a name that will yield a valid search result, e.g.:
//    Grimgaunt Predator
//    grimgaunt predator
//    grIMG aun TPRE daTO r
//    grim_gaunt-pred-ator
// We can't fix all of these, but we can do our best to normalize on something
// close to what the canonical card name is.
var guessName = function(name) {
  return _.str.titleize(name.replace(/[^a-zA-Z ',]/g, ''));
}

var Card = function(name) {
  return {
    portraitUrl: portraitUrl(name),
    combinedUrl: combinedUrl(name),
    name: guessName(name),
    key: urlName(name)
  };
};

module.exports = Card;
