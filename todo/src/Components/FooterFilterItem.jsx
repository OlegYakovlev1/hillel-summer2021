const FooterFilterItem = (props) => {
    return(
        <li >
            <a
                href="#!"
                className={props.isActive ? "selected" : ""}
                onClick={(e) => {e.preventDefault(); props.onClick(props.item.id)}}>
                {props.item.title}
            </a>
        </li>
    );
}

export default FooterFilterItem;