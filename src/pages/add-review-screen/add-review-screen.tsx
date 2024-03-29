import {Films} from '../../types/film.ts';
import {useParams} from 'react-router-dom';
import {useState} from 'react';

type AddReviewScreenProps = {
  films: Films;
}

export default function AddReviewScreen({films}: AddReviewScreenProps) {
  const { id } = useParams();
  const currentFilm = films.find((film) => film.id.toString() === id);

  const [formData, setFormData] = useState({
    review: '',
    rating: 8
  });

  const handleFieldChange = (evt: { target: { value: any } }) => {
    setFormData({...formData, review: evt.target.value});
  };

  const handleRatioChange = (evt: { target: { value: any } }) => {
    setFormData({...formData, rating: evt.target.value});
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <title>WTW</title>
        <meta name="robots" content="noindex, nofollow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="css/main.min.css"/>
      </head>

      <body>
        <div className="visually-hidden"></div>

        <section className="film-card film-card--full">
          <div className="film-card__header">
            <div className="film-card__bg">
              <img src={currentFilm?.preview} alt={currentFilm?.title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header">
              <div className="logo">
                <a href="main.html" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <a href="film-page.html" className="breadcrumbs__link">{currentFilm?.title}</a>
                  </li>
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link">Add review</a>
                  </li>
                </ul>
              </nav>

              <ul className="user-block">
                <li className="user-block__item">
                  <div className="user-block__avatar">
                    <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                  </div>
                </li>
                <li className="user-block__item">
                  <a className="user-block__link">Sign out</a>
                </li>
              </ul>
            </header>

            <div className="film-card__poster film-card__poster--small">
              <img src={currentFilm?.poster} alt={currentFilm?.title} width="218" height="327" />
            </div>
          </div>

          <div className="add-review">
            <form action="#" className="add-review__form">
              <div className="rating">
                <div className="rating__stars">
                  <input className="rating__input" id="star-10" type="radio" name="rating" value="10" onChange={handleRatioChange} />
                  <label className="rating__label" htmlFor="star-10">Rating 10</label>

                  <input className="rating__input" id="star-9" type="radio" name="rating" value="9" onChange={handleRatioChange} />
                  <label className="rating__label" htmlFor="star-9">Rating 9</label>

                  <input className="rating__input" id="star-8" type="radio" name="rating" value="8" onChange={handleRatioChange} checked />
                  <label className="rating__label" htmlFor="star-8">Rating 8</label>

                  <input className="rating__input" id="star-7" type="radio" name="rating" value="7" onChange={handleRatioChange} />
                  <label className="rating__label" htmlFor="star-7">Rating 7</label>

                  <input className="rating__input" id="star-6" type="radio" name="rating" value="6" onChange={handleRatioChange} />
                  <label className="rating__label" htmlFor="star-6">Rating 6</label>

                  <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={handleRatioChange} />
                  <label className="rating__label" htmlFor="star-5">Rating 5</label>

                  <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={handleRatioChange} />
                  <label className="rating__label" htmlFor="star-4">Rating 4</label>

                  <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onChange={handleRatioChange} />
                  <label className="rating__label" htmlFor="star-3">Rating 3</label>

                  <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={handleRatioChange} />
                  <label className="rating__label" htmlFor="star-2">Rating 2</label>

                  <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={handleRatioChange} />
                  <label className="rating__label" htmlFor="star-1">Rating 1</label>
                </div>
              </div>

              <div className="add-review__text">
                <textarea className="add-review__textarea" name="review-text" id="review-text"
                  placeholder="Review text" onChange={handleFieldChange}
                />
                <div className="add-review__submit">
                  <button className="add-review__btn" type="submit">Post</button>
                </div>
              </div>

            </form>
          </div>

        </section>
      </body>
    </html>
  );
}
