$(function() {

    var gameTypes = [
        'slots',
        'dice',
        'roulette',
        'lottery'
    ];

    $(document).on('click', '#send-request-btn', function() {

        let gameType = $(this).data('game-type');

        if (gameTypes.includes(gameType)) {
            alert('Wrong game type!');
            return;
        }

        $.ajax({
            url: "http://localhost:9902/index.php/dice/play",
            type: "POST",
            data: getFormData($('#debugger-request-form')),
            // data: JSON.stringify({
            //     seed: 123,
            //     range: {
            //         min: 1,
            //         max: 5
            //     },
            //     matrix: [
            //         [-1, -1, -1],
            //         [-1, -1, -1],
            //         [-1, -1, -1],
            //         [-1, -1, -1],
            //         [-1, -1, -1]
            //     ]
            // }),
            contentType: "application/json",
            function(gameRound) {

                console.log(gameRound);

            }
        });
    });

    function getFormData($form) {
        var unindexed_array = $form.serializeArray();
        console.log(unindexed_array);
        var indexed_array = {};

        $.map(unindexed_array, function(n, i) {
            indexed_array[n['name']] = n['value'];
        });

        console.log(indexed_array);

        return JSON.stringify(indexed_array);
    }

});