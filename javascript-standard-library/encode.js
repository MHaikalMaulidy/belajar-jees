const url='http://contoh.com/?name=timoty ronald';
document.writeln(url)

const encoded=encodeURI(url);
document.writeln('<p>',encoded);

const decoded=decodeURI(url)
document.writeln('<p>',decoded);
