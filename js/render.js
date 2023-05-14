const pictureWidthHeight = 182;

const createPictureFromObject = (object) => {
  const parent = document.createElement('a');
  const image = document.createElement('img');
  const information = document.createElement('p');
  const comments = document.createElement('span');
  const likes = document.createElement('span');

  parent.setAttribute('href', '#');
  parent.classList.add('picture');

  image.setAttribute('width', pictureWidthHeight.toString());
  image.setAttribute('height', pictureWidthHeight.toString());
  image.setAttribute('src', object.url);
  image.setAttribute('alt', object.description);
  image.classList.add('picture__img');

  comments.append(object.comments);
  comments.classList.add('picture__comments');

  likes.append(object.likes);
  likes.classList.add('picture__likes');

  information.classList.add('picture__info');
  information.append(comments, likes);

  parent.append(image, information);

  return parent;
};

const showPicturesFromObjects = (objects) => {
  const pictures = new DocumentFragment();

  pictures.append(...objects.map((object) => createPictureFromObject(object)));

  document.querySelector('.pictures').appendChild(pictures);
};

export { showPicturesFromObjects };
