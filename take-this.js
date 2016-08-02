var map = {
    rows: [
        {
            tiles: [
                {
                    id: 'A1'
                },
                {
                    id: 'A2'
                }
            ]
        },
        {
            tiles: [
                {
                    id: 'B1'
                },
                {
                    id: 'B2'
                }
            ]
        }
    ]
};

$(document).ready(function(){
    var row, tile;
    for (var i = 0; i < map.rows.length; i++) {
        row = $('<div></div>');
        row.addClass('row');
        for (var j = 0; j < map.rows[i].tiles.length; j++) {
            tile = $('<div></div>');
            tile.addClass(map.rows[i].tiles[j].id);


        }
    }
});
