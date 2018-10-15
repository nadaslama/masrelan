let data;
var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=eg&' +
          'apiKey=83ff73b3699d4c99a050b1a242ee2e73';
var req = new Request(url);
fetch(req)
    .then(function(response) {
      return response.json();


    })
    .then((response)=>{
      data=response.articles
      console.log(data)
      data.map((art)=>{
        // select the main contaianer
        let cont=document.querySelector(".cont")

        // article title
        let artHead=document.createElement("h2")
        let artHeadText=document.createTextNode(art.title)
        
        artHead.appendChild(artHeadText)
        artHead.setAttribute("class", "head")
        cont.appendChild(artHead)

         // article date
         let artDate=document.createElement("p")
         let artDateText=document.createTextNode(art.publishedAt)
         artDate.className="date"
         artDate.appendChild(artDateText)
        console.log(artDate)
   


        // article source
        let artSource=document.createElement("p")
        let artSourceText=document.createTextNode(art.source.name)
        artSource.className= "source"
        artSource.appendChild(artSourceText)
        artSource.appendChild(artDate)
        cont.appendChild(artSource)

         // article source
         let artPhoto=document.createElement("img")
         //let artPhotoUrl=document.createTextNode(art.urlToImage)
         console.log(art.urlToImage)
         artPhoto.classList.add("artPhoto")
         //artPhoto.setAttribute("src", `${art.urlToImage}`)
         //artPhoto.setAttribute("srcset", `${art.urlToImage} 400w, "news-logo-col02.png 400w"`)
         //supply alt image
         let  url =art.urlToImage
  
         artPhoto.setAttribute("srcset", url)
         //
         artPhoto.setAttribute("alt", "لم يتمكن الموقع من إيجاد صورة لهذا الخبر من المصدر")
         cont.appendChild(artPhoto)

         // article main content
         let artMain=document.createElement("div")
         let artMainText=document.createTextNode(art.content)
         artMain.className="main"
    artMain.appendChild(artMainText)
    cont.appendChild(artMain)

       //add facebook butt

let faceShareButt= document.createElement("div")
faceShareButtText = '<div class="fb-like" data-href="http://www.egyptnow.live/" data-layout="standard" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>'
faceShareButt.innerHTML=`${faceShareButtText}`
cont.appendChild(faceShareButt)
getFaceButt(document, 'script', 'facebook-jssdk');


      })





    })
    // facebook button function 
/*(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1&appId=688133458058999&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));*/
////////////
function getFaceButt(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1&appId=688133458058999&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}