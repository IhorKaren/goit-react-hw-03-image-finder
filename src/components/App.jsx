import React, { Component } from 'react';
import { Container } from './Container/Container.styled';
import fetchImages from '../services/pixabayAPI';
import SearchBar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';

export class App extends Component {
  state = {
    images: [],
    value: '',
    page: 1,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { images } = this.state;

    if (prevState.images !== images && images.length > 12) {
      const { height: cardHeight } = document
        .querySelector('ul')
        .firstElementChild.getBoundingClientRect();

      window.scrollBy({
        top: cardHeight * 4,
        behavior: 'smooth',
      });
    }
  }

  getImages = async value => {
    try {
      const { page } = this.state;

      this.setState({ loading: true });

      if (value !== this.state.value) {
        const responseImages = await fetchImages(value, 1);
        return this.setState({
          images: responseImages,
          page: 1,
          value: value,
        });
      }

      if (value === this.state.value) {
        const responseImages = await fetchImages(value, page);
        return this.setState(prevState => ({
          page: prevState.page + 1,
          images: [...prevState.images, ...responseImages],
          value: value,
        }));
      }
    } catch (error) {
    } finally {
      this.setState({ loading: false });
    }
  };

  handleLoadMoreClick = () => {
    const { value, page } = this.state;

    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      () => this.getImages(value, page)
    );
  };

  render() {
    const { images } = this.state;
    const showLoadMoreButton = images.length < 12 || images.length === 0;

    return (
      <Container>
        {this.state.loading && <Loader />}
        <SearchBar getImages={this.getImages} />
        <ImageGallery images={images} />
        {showLoadMoreButton ? null : (
          <Button buttonClick={this.handleLoadMoreClick} />
        )}
      </Container>
    );
  }
}
