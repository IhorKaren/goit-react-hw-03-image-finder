import React, { Component } from 'react';
import PageModal from 'components/Modal';

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
        <li onClick={this.openModal}>
          <img src={webformatURL} alt={tags} />
        </li>
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
