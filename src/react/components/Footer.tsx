import React from 'react'
import '../../scss/components/footer.scss'

interface Props {
    links: {
        icon: string,
        link: string
    }[]
}

function Footer(props: Props): JSX.Element {
    const {links} = props;
    var currentYear = new Date().getFullYear();

    const linksHtml = links.map((item, index) => {
        return (
            <li key={index}>
                <a href={item.link} rel="noreferrer" target="_blank"><span className={"icon-"+item.icon}></span></a>
            </li>
        )
    });

    return (
        <footer id="footer">
            <ul className="links">
                {linksHtml}
            </ul>
            <div className="copyright">Nick Klein {currentYear}</div>
        </footer>
    )
}

export default Footer