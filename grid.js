$(document).ready(function(){
	make_grid(20)
});



function make_grid(squares) {
    i = 1;
    j = 1;
    side = Math.floor(Math.sqrt((960*960) / (squares * squares)));

    while(i <= squares) {
        $("#grid").append('<div class="column' + i +'" style="display:inline-block;" >');
        while(j <= squares) {
            $(".column" + i).append('<div class="square" style="width:' + side +'px; height:' + side + 'px">');
            j += 1;
        }
        i += 1;
        j = 1;
    }
    
};


$(this).hover(function(){
     console.log("this is something");
     $("#grid td").closest().toggleClass("active");
});
