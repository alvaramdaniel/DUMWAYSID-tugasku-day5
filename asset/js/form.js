function getData(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let subject = document.getElementById('subject').value
    let description = document.getElementById('description').value

    if(name == "") {
        alert("is nama anda dengan benar")
    } else if(email == "") {
        alert("Bro jangan lupa input emailnya")
    } else if(phone == "") {
        alert("BRO JANGAN ASAL INPUT NOMOR AJHA YA ")
    } else if(subject == "") {
        alert("APA MAKSUD DAN TUJUAN ANDA")
    } else if(description == "") {
        alert("BRO KRITIK SAYA")
    }

    const defaultEmail = "hi.Danialvaro001@gmail.com"

    let mailTo = document.createElement('a')
    mailTo.href = `mailto:${defaultEmail}?subject=${subject}&body=Halo nama saya ${name}, saya ingin ${description} tolong hubungin saya ${phone}`
    mailTo.click()

    let audience = {
        name,
        email,
        phone,
        subject,
        description
    }

    console.log(audience)
}