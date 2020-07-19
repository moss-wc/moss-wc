import { Component, ComponentInterface, h } from '@stencil/core'

@Component({
  tag: 'moss-button',
  styleUrl: 'moss-button.css',
})
export class MossButton implements ComponentInterface {
  render() {
    return (
      <button>
        <slot></slot>
      </button>
    )
  }
}
