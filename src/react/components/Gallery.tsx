import React from 'react'
import '../../scss/components/gallery.scss'

/** TODO: Props: any */
function Gallery(props: any) {
    const { images } = props;

    let galleryHtml;
    if (images) {
        galleryHtml = images.map((item: any) => {
            return (
                <div className="gallery-item">
                    <img src={item} className={""} alt="" />
                </div>
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