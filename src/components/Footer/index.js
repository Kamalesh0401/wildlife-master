
function Footer(props) {
    return (<footer className="footer">
        <div className="container-fluid text-white d-flexZ align-items-center justify-content-center" style={{ backgroundColor: "#004d40" }}>
            <div className="row">
                <div className="col-md-12">
                    © Wildlife Explorer {new Date().getFullYear()} All Rights Reserved
                </div>
                {/* 
<div className="col-md-6">
<div className="text-md-end d-none d-md-block">
    <a href="#">About</a>
    <a href="#">Support</a>
    <a href="#">Contact Us</a> 
</div>
</div>*/}
            </div>
        </div>
    </footer>);
}

export default Footer;
