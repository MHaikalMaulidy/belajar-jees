const original='eko&timoty=ronald';
document.writeln(original)

const encoded=btoa(original)
document.writeln('<p>',encoded)

const decoded=atob(encoded)
document.writeln('<p>',decoded)