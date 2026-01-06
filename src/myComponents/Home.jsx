import React from 'react'

export default function Home() {
    return (
        <div>
            {/* HOME SECTION */}
            <section id="home" class="full-hight px-lg-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10">
                            <h1 class="text-uppercase display-4 fw-bold" data-aos="fade-up">
                                All the
                                <span class="text-brand"> Breaking news </span>
                                you need, in one place.
                            </h1>
                            <p class="lead mt-2 mb-3 fs-3" data-aos="fade-up" data-aos-delay="300">
                                Discover the latest headlines, trending stories, and important updates—fast, reliable, and always up to date.
                            </p>
                            <div data-aos="fade-up" data-aos-delay="600">
                                <a href="#general" class="btn btn-brand fw-bold me-4">
                                    CHECK TODAY'S NEWS </a>
                                <a href="" class="custom-link num"> Source: its me bruv @ gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
