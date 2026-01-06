import React from 'react'

export default function Footer() {
    return (
        <div>
            {/* FOOTER */}
            <footer class="px-lg-5 py-4">
                <div class="container m-4">
                    <div class="row justify-content-between gy-4">
                        <div class="col-auto mb-0">
                            <p>&copy; All Rights Reserved</p>
                        </div>
                        <div class="social-icons col-auto">
                            <a href=""><i class="lab la-youtube"></i></a>
                            <a href=""><i class="lab la-github"></i></a>
                            <a href=""><i class="lab la-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
