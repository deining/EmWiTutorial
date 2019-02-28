function obfuscateEmail () {
  var coded = 'jSvpLj8@vLQSQSPLp.SLh'
  var key = 'e8F1UBOx36uEdrARDKnJwLZgCVlzNi5fqvpctMaSX2skPmY4THQWb7yG9hIjo0'
  var shift = coded.length
  var link = ''
  for (var i = 0; i < coded.length; i++) {
    if (key.indexOf(coded.charAt(i)) === -1) {
      var ltr = coded.charAt(i)
      link += (ltr)
    } else {
      ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length
      link += (key.charAt(ltr))
    }
  }
  return link
}