import {Films} from '../../types/film.ts';
import {Link, useParams} from 'react-router-dom';
import {useState} from 'react';
import DetailsTab from './tabs/details-tab.tsx';
import ReviewsTab from './tabs/reviews-tab.tsx';
import OverviewTab from './tabs/overview-tab.tsx';
import cn from 'classnames';
import SmallFilmCard from "../../components/small-film-card.tsx";

type MovieScreenProps = {
  films: Films;
}

const OVERVIEW_TAB = "overviewTab"
const DETAILS_TAB = "detailsTab"
const REVIEWS_TAB = "reviewsTab"

// 6.1
// 6.2
// 7.1
// 7.2
// 7.3

export default function MovieScreen({films}: MovieScreenProps) {
  const { id } = useParams();
  const currentFilm = films.find((film) => film.id.toString() === id);

  const moreLikeThisFilms = films.slice(0, 4)

  const [currentTab, setCurrentTab] = useState(OVERVIEW_TAB)
  const [isOverviewTabPressed, setIsOverviewTabPressed] = useState(true);
  const [isDetailsTabPressed, setIsDetailsTabPressed] = useState(false);
  const [isReviewsTabPressed, setIsReviewsTabPressed] = useState(false);

  const setOverviewTab = () => {
    setCurrentTab(OVERVIEW_TAB)
    setIsOverviewTabPressed(true)
    setIsDetailsTabPressed(false)
    setIsReviewsTabPressed(false)
  }

  const setDetailsTab = () => {
    setCurrentTab(DETAILS_TAB)
    setIsOverviewTabPressed(false)
    setIsDetailsTabPressed(true)
    setIsReviewsTabPressed(false)
  }

  const setReviewsTab = () => {
    setCurrentTab(REVIEWS_TAB)
    setIsOverviewTabPressed(false)
    setIsDetailsTabPressed(false)
    setIsReviewsTabPressed(true)
  }

  const [focusedCardId, setFocusedCardId] = useState(0);

  const handleCardFocusEvent = (evt: any) => {
    setFocusedCardId(evt.currentTarget.id);
  };

  const setTabInPage = () => {
    switch(currentTab) {
      case DETAILS_TAB: {
        return (
          <DetailsTab
            director={currentFilm!!.director}
            cast={currentFilm!!.cast}
            genre={currentFilm!!.genre}
            year={currentFilm!!.year}
          />
        );
      }
      case REVIEWS_TAB: {
        return (
          <ReviewsTab/>
        );
      }
      default: {
        return (
          <OverviewTab
            description={currentFilm!!.description}
            director={currentFilm!!.director}
            cast={currentFilm!!.cast}
            rating={currentFilm!!.rating}
            ratingDescription={currentFilm!!.ratingDescription}
            ratingCounter={currentFilm!!.ratingCounter}
          />
        );
      }
    }
  }

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
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={currentFilm?.preview} alt="The Grand Budapest Hotel" />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header film-card__head">
              <div className="logo">
                <a href="main.html" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

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

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{currentFilm?.title}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{currentFilm?.genre}</span>
                  <span className="film-card__year">{currentFilm?.year}</span>
                </p>

                <div className="film-card__buttons">
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list film-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                    <span className="film-card__count">9</span>
                  </button>
                  <Link to={`/films/${id}/review`}>
                    <a className="btn film-card__button">Add review</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={currentFilm?.poster} alt="The Grand Budapest Hotel poster" width="218" height="327" />
              </div>

              <div className="film-card__desc">
                <nav className="film-nav film-card__nav">
                  <ul className="film-nav__list">
                    <li className={cn('film-nav__item ', {
                        'btn-film-nav__item--active': isOverviewTabPressed
                      })}>
                      <a className="film-nav__link" onClick={setOverviewTab}>Overview</a>
                    </li>
                    <li className={cn('film-nav__item ', {
                      'btn-film-nav__item--active': isDetailsTabPressed
                    })}>
                      <a className="film-nav__link" onClick={setDetailsTab}>Details</a>
                    </li>
                    <li className={cn('film-nav__item ', {
                      'btn-film-nav__item--active': isReviewsTabPressed
                    })}>
                      <a className="film-nav__link" onClick={setReviewsTab}>Reviews</a>
                    </li>
                  </ul>
                </nav>

                {setTabInPage()}

              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <div className="catalog__films-list">
              {moreLikeThisFilms.map((film) =>
                <SmallFilmCard
                  id={film.id}
                  key={film.title}
                  title={film.title}
                  preview={film.preview}
                  video={film.video}
                  isFocused={film.id == focusedCardId}
                  handleCardFocus={handleCardFocusEvent}
                />
              )}
            </div>
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
