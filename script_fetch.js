
let url = './test1.json';

// url = post['related'];

var post;
var title;
var relatedUrl;

const innerHTML = (innerContent, elementId, relatedUrl) => {
  let Id = document.getElementById(elementId);
  {
    relatedUrl 
    ? 
    Id.innerHTML = `<a onClick="fetcher('${relatedUrl}')">${innerContent}</a>`
    :
    Id.innerHTML = innerContent;
  }
}

const fetcher = (file) => {
  console.log('fetcher');
  fetch(file)
    .then(response => response.json())
    .then(data => {
      innerHTML(data['title'], 'title');
      innerHTML(data['desc'], 'desc');
      innerHTML(data['related_text'], 'related', data['related_url']);
      // relatedUrl = data['related_url'];
      // post = data;
      // console.log(post);
    })
    .catch(error => console.log(error));
}

fetcher(url);


const setUrl = (relatedUrl) => {
  fetcher(relatedUrl);
};