const input = document.querySelector('#image_uploads');

const preview= document.querySelector('.preview');

input.addEventListener('change', updateImageDisplay);


function updateImageDisplay() {
  while(preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = input.files;
  if(curFiles.length === 0) {
   
    const para = document.createElement('p');
    para.textContent = 'No files currently selected for upload';
    preview.appendChild(para);
  } else {
    const list = document.createElement('div');
    preview.appendChild(list);

    for(const file of curFiles) {
      const listItem = document.createElement('div');
      const para = document.createElement('p');

      if(validFileType(file)) {
       
        const image = document.createElement('img');
        image.src = URL.createObjectURL(file);

        listItem.appendChild(image);
   /*     listItem.appendChild(para);*/
      } else {
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    }
  }
}

const fileTypes = [
  'image/jpeg',
  'image/pjpeg',
  'image/png'
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}

/*function returnFileSize(number) {
  if(number < 1024) {
    return number + 'bytes';
  } else if(number > 1024 && number < 1048576) {
    return (number/1024).toFixed() + 'KB';
  } else if(number > 1048576) {
    return (number/1048576).toFixed() + 'MB';
  }
}*/
$('.dropdown-menu li').on('click', function() {
  var getValue = $(this).text();
  $('.dropdown-select').text(getValue);
});