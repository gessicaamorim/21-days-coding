(document).ready(function(){
    ("span").click(function(){
        let idSpan = $(this).attr("id");
        let emoji = document.getElementById(idSpan);

        console.log(emoji.textContent)
        emoji.select();
        document.execCommand('copy');
    });
});