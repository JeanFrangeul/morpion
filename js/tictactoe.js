$().ready( () => {

    const startButton = $("#start");
    const grille = $("#grille");
    const cases = $(".case");
    const playerEl = $("#player");
    var player = 0;

    startButton.click(() => {
        cases.text('');
        
    })

    const isXOrO = (player) => {
        if (player % 2 == 0) {
            return 'X';
        } else {
            return 'O';
        }
    }

    $(".case").click(function(){

        $(this).text(isXOrO(player));
        player++
        $(playerEl).text(isXOrO(player));
    });




})