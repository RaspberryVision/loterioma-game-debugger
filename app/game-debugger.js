$(function() {

    var gameTypes = [
        'slots',
        'dice',
        'roulette',
        'lottery'
    ];

    $(document).on('click', '.send-request', function() {

        let gameType = $(this).data('game-type');

        if (!gameTypes.includes(gameType)) {
            alert('Wrong game type!');
            return;
        }

        $.ajax({
            url: "http://localhost:9902/index.php/" + gameType + "/play",
            type: "POST",
            data: JSON.stringify({
                seed: 123,
                range: {
                    min: 1,
                    max: 5
                },
                matrix: [
                    [-1, -1, -1],
                    [-1, -1, -1],
                    [-1, -1, -1],
                    [-1, -1, -1],
                    [-1, -1, -1]
                ]
            }),
            contentType: "application/json",
            function(gameRound) {

                console.log(gameRound);

            }
        });
    });

});