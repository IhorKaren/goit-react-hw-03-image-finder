import React, { Component } from 'react';
import PageModal from 'components/Modal';
import {GalleryItem, ImageGalleryItemImage} from './ImageGalleryItem.styled'

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        <GalleryItem onClick={this.openModal}>
          <ImageGalleryItemImage src={webformatURL} alt={tags} />
        </GalleryItem>
        {isModalOpen && (
          <PageModal closeModal={this.closeModal}>
            <img src={largeImageURL} alt={tags} />
          </PageModal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
