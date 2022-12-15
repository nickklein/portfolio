import React from 'react'
import '../../scss/components/threecolumngrid.scss'


interface Props {
    
}

function ThreeColumnGrid(props: any) {
    return (
        <section className="three-col-grid section-container">
            <h2 id="work">Work</h2>
                
            <div>
                <div className="btn-group filter-button-group">
                    <button type="button" className="btn btn-secondary" data-filter="all">All</button>

                    <button type="button" className="btn btn-secondary" data-filter="hardware">Hardware</button>
                    <button type="button" className="btn btn-secondary" data-filter="laravel">Laravel</button>
                    <button type="button" className="btn btn-secondary" data-filter="php">PHP</button>
                    <button type="button" className="btn btn-secondary" data-filter="python">Python</button>
                    <button type="button" className="btn btn-secondary" data-filter="wordpress">WordPress</button>
                </div>
            </div>
                
            <div className="container-wrap">
                <div className="row">
                    <div className="col-item wpjs slide-bottom col-md-6 col-lg-4 all laravel animate">
                        <a href="https://www.nickklein.ca/work/notes-app/" className="grid-item">
                            <div className="grid-image color"></div>
                                            
                            <div className="grid-info text">
                                <h3>Notes</h3>  
                            </div>
                        </a>
                    </div>
                    <div className="col-item wpjs slide-bottom col-md-6 col-lg-4 all laravel animate">
                        <a href="https://www.nickklein.ca/work/steamcompanion/" className="grid-item">
                            <div className="grid-image">
                                <img className="rounded" src="https://www.nickklein.ca/wp-content/uploads/2018/10/steamcompanion-1-500x500-c-default.jpg" />
                            </div>
                                    
                            <div className="grid-info">
                                <img src="https://www.nickklein.ca/wp-content/uploads/2018/10/sc.png" />  
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThreeColumnGrid