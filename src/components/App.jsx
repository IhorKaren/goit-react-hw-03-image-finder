import React, { Component } from 'react';
import { Container } from './Container/Container.styled';
import fetchImages from '../services/pixabayAPI';
import SearchBar from './Searchbar';
import ImageGallery from './ImageGallery';

export class App extends Component {
  state = {
    images: [],
  };

  getImages = async (value, page) => {
    try {
      const responseImages = await fetchImages(value, page);
      this.setState({ images: responseImages });
    } catch {}
  };

  render() {
    return (
      <Container>
        <SearchBar getImages={this.getImages} />
        <ImageGallery images={this.state.images} />
      </Container>
    );
  }
}
