export default function createCard(response) {
  const { webformatURL, largeImageURL, likes, views, comments, downloads, id } =
    response;

  return `<a class="gallery-item" href="${largeImageURL}">
            <div class="photo-card">
                <img class = "card-image" src="${webformatURL}" alt="${id}" loading="lazy"/>
                <div class="info">
                    <p class="info-item">
                        <b>likes:</b> 
                        ${likes}
                    </p>
                    <p class="info-item">
                        <b>views:</b> 
                        ${views}
                    </p>
                    <p class="info-item">
                        <b>comments:</b>
                        ${comments}
                    </p>
                    <p class="info-item">
                        <b>downloads:</b>
                        ${downloads}
                    </p>
                </div>
            </div>
        </a>`;
}
