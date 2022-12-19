function regex(hasil) {
    let data = "Belajar menimba ilmu programing bersama Niomic";

    return hasil.exec(data);
}

console.log(regex(/bersama/));