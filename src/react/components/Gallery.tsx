import React from 'react'
import '../../scss/components/gallery.scss'

function Gallery(props: any) {
    const { images } = props;
    console.log(images);
    let galleryHtml;
    if (images) {
        galleryHtml = images.map((item: any) => {
            return (
                <img src={item} className={""} alt="" />
            )
        });
    }
    return (
        <section className="gallery-container section-container">
            <div className="gallery">
                {galleryHtml}
            </div>
        </section>
    )
}

export default Gallery