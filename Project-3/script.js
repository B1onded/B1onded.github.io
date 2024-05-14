function updateImage() {
    let imageContainer = document.getElementById("image-container");
    let currentHour = (new Date().getHours())%12;

    console.log(currentHour)
    let imageUrl = "";


    if (currentHour === 1 ) {
        imageUrl = "jordan1.png"; 
    } else if (currentHour === 2 ) {
        imageUrl = "jordan2.png"; 
    } else if (currentHour === 3 ) {
        imageUrl = "jordan3.png"; 
    } else if (currentHour === 4 ) {
        imageUrl = "jordan4.png"; 
    } else if (currentHour === 5 ) {
        imageUrl = "jordan5.png"; 
    } else if (currentHour === 6 ) {
        imageUrl = "jordan6.png"; 
    } else if (currentHour === 7 ) {
        imageUrl = "jordan7.png"; 
    } else if (currentHour === 8 ) {
        imageUrl = "jordan8.png"; 
    } else if (currentHour === 9 ) {
        imageUrl = "jordan9.png"; 
    } else if (currentHour === 10 ) {
        imageUrl = "jordan10.png"; 
    } else if (currentHour === 11 ) {
        imageUrl = "jordan11.png"; 
    } else if (currentHour === 12 ) {
        imageUrl = "jordan12.png"; 

  
    }

    imageContainer.innerHTML = `<img src="${imageUrl}" alt="Image">`;

   
}

setInterval(updateImage, 1000);
