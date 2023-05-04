import React, { Component } from 'react';
import { Container } from './Container/Container.styled';
import fetchImages from '../services/pixabayAPI';
import SearchBar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';

export class App extends Component {
  state = {
    images: [],
    value: '',
    page: 1,
  };

  getImages = async value => {
    try {
      const { page } = this.state;

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
    } catch (error) {}
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
        <SearchBar getImages={this.getImages} />
        <ImageGallery images={images} />
        {showLoadMoreButton ? null : (
          <Button buttonClick={this.handleLoadMoreClick} />
        )}
      </Container>
    );
  }
}
