$().ready( () => {

    const startButton = $("#start");
    const cases = $(".case");
    const winEl = $(".win");
    const messageEl = $("#message");
    var player = 0;
    var color;
    var tableauX = [];
    var tableauO = [];

    const isXOrO = (player) => { /* Signe X | O */
        if (player % 2 == 0) {
            color = 'green';
            nextColor = 'pink'
            return 'X';
        } else {
            color = 'pink';
            nextColor = 'green'
            return 'O';
        };
    };

    startButton.click(() => { /* fonctionnement de la grille */
        if ($(startButton).text() == 'Start') {
            $(startButton).hide();
        } else {
            $(messageEl).text('')
        }

        $(cases).text('');
        tableauX = [];
        tableauO = [];

        $(messageEl).css('font-size', '1.3rem');
        $(".case").click(function(){
            $(this).text(isXOrO(player));
            $(this).css("color", color);
            $(messageEl).css("color", nextColor);
            $(messageEl).html("Tour de <span id='OX'>" + isXOrO(player) + "<span>");
            setArray($(this).attr('id').substring(4));
            player++;

            $(startButton).css({'position': 'relative', 'top': '10px' });
            $(startButton).show();
            $(startButton).text('Restart');
            $(this).off();
        });
    });

    const setArray = (id) => {
        if (isXOrO(player) == 'X') {
            tableauX.push(id);
        } else {
            tableauO.push(id);
        }
        isWin(tableauX, tableauO, isXOrO(player));
    }

    const isWin = (tableauX, tableauO, playerXO) => {
        $.each(possibilities, (key, val) => { ///val = [0, 1, 2] PUIS [3, 4, 5] Puis...

            if( tableauX.includes(val[0].toString()) && tableauX.includes(val[1].toString()) && tableauX.includes(val[2].toString())) {
                $(messageEl).text('Le Gagnant est : ' + playerXO);
                $(messageEl).css("font-size", "2.5rem");
                $(messageEl).css("color", color);
                $(".case").off();
            };
            if ( tableauO.includes(val[0].toString()) && tableauO.includes(val[1].toString()) && tableauO.includes(val[2].toString())) {
                $(messageEl).text('Le Gagnant est : ' + playerXO);
                $(messageEl).css("font-size", "2.5rem");
                $(messageEl).css("color", color);
                $(".case").off();
            };
        });
    }

    const possibilities = {
        ligne1: [0, 1, 2],
        ligne2: [3, 4, 5],
        ligne3: [6, 7, 8],
        colone1: [0, 3, 6],
        colone2: [1, 4, 7],
        colone3: [2, 5, 8],
        diagonale1: [0, 4, 8],
        diagonale2: [6, 4, 2]
    };
});