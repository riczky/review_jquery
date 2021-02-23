$(document).ready(function () {
    // Append sesudah child element child
    $("#tambahinput1").click(function () {
        $("#kotak1").append("<br><input type='text' name='nama' placeholder='Nama Lengkap'><br>");
    });
    // Prepend Sebelum element child
    $("#tambahinput2").click(function () {
        $("#kotak1").prepend("<br><input type='text' name='nama' placeholder='Nama Lengkap'><br>");
    });
    //After setelah element parent
    $("#tambahinput3").click(function () {
        $("#kotak1").after("<br><input type='text' name='nama' placeholder='Nama Lengkap'><br>");
    });
    //Before sebelum element parent
    $("#tambahinput4").click(function () {
        $("#kotak1").before("<br><input type='text' name='nama' placeholder='Nama Lengkap'><br>");
    });

    $("#tambah1").click(function () {
        var string1 = "<br><strong>Kalimat 1</strong> ";
        var string2 = "<em>Kalimat 2</em> ";
        var string3 = "<span style='color:blue;'>Kalimat 3</span> ";

        $("#kotak2 img").after(string1, string2, string3);
    });

    $("#hapus1").click(function () {
        $("#kotak3").remove();
    });

    $("#hapus2").click(function () {
        $("#kotak3").empty();
    });

    $("#hapus3").click(function () {
        $("#kotak3 li").remove(".a, .b");
    });
});