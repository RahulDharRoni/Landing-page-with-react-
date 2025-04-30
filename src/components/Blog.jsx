import React from "react";
import "../App.css";

function Blog() {
  return (
    <div>
      <main>
        <article>
          <p className="date">11/12/20</p>
          <h2>On the Street in Brooklyn</h2>
          <img
            src="https://images.unsplash.com/photo-1724685324990-74387bbde351?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="On the Street in Brooklyn"
          />
          <p className="dropcap">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            blanditiis consequatur doloremque enim iste odio veritatis placeat
            eos delectus ex, rerum corrupti numquam, illo dolorum minima nobis
            nostrum esse mollitia! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque tempora sunt repudiandae nam sequi eos,
            consectetur illo asperiores inventore ab molestias minima animi
            quasi neque quas incidunt ipsa! Alias, beatae.
          </p>
          <p className="continue">
            <a href="#">Continues ...</a>
          </p>
        </article>

        <hr />

        <article>
          <p className="date">11/11/20</p>
          <h2>Vintage in Vogue</h2>
          <img
            src="https://images.unsplash.com/photo-1488693161025-5f967b74de89?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Vintage in Vogue"
          />
          <p className="dropcap">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            blanditiis consequatur doloremque enim iste odio veritatis placeat
            eos delectus ex, rerum corrupti numquam, illo dolorum minima nobis
            nostrum esse mollitia! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque tempora sunt repudiandae nam sequi eos,
            consectetur illo asperiores inventore ab molestias minima animi
            quasi neque quas incidunt ipsa! Alias, beatae.
          </p>
          <p className="continue">
            <a href="#">Continues ...</a>
          </p>
        </article>
      </main>
    </div>
  );
}

export default Blog;
