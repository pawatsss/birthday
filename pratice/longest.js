let long = ('i think you so badsadasdsa sadsd sdasd')

function longest(l) {
    var lsp = l.split(" ");
    var k = 0;
    let answer
    for (i = 0; i < lsp.length; i++) {
        if (k < lsp[i].length) {
            k = lsp[i].length;
            answer = lsp[i];
        }
    }
    console.log(answer)
}
longest(long)