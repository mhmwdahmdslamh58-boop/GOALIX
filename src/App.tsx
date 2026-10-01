/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <div
      onDoubleClick={toggleFullScreen}
      className="fixed inset-0 w-screen h-screen bg-black select-none"
    />
  );
}
