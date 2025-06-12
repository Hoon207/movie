import React from 'react';

function Sub2(props) {
  return (
    <>
      <main>
      <section>
        <h2>Contact Us</h2>
        <form action="">
          <div>
            <label for="">Name: </label>
            <input type="text" />
          </div>

          <div>
            <label for="">E-mail: </label>
            <input type="text" />
          </div>

          <div>
            <label for="">Subject: </label>
            <textarea cols='60' rows='13'></textarea>
          </div>
          <button>send</button>
        </form>
      </section>
    </main>
    </>
  );
}

export default Sub2;