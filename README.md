# Yandex Cloud Video TypeScript typings

TypeScript typings for yandex cloud video sdk. See https://yandex.cloud/ru/docs/video/sdk/

## Usage

### Install the yandex cloud video sdk

Using script tag

```html
<script src="https://runtime.video.cloud.yandex.net/player/js/player-sdk.js"></script>
```

Or use a dynamic connection

```typescript
loadDynamicScript({
  id: 'yandex-cloud-player-script',
  src: 'https://runtime.video.cloud.yandex.net/player/js/player-sdk.js',
  callback: initPlayer,
})
```

### Example of react component

Add yandex.d.ts to your project or stick the code in your @types

```typescript jsx
const YandexPlayer = () => {
	const playerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const initPlayer = () => {
			if (window.Ya?.playerSdk?.init && playerRef.current) {
				window.Ya.playerSdk.init({
					element: playerRef.current,
					source: 'https://runtime.video.cloud.yandex.net/player/video/...',
					autoplay: false,
				})
			}
		}

		loadDynamicScript({
			id: 'yandex-cloud-player-script',
			src: 'https://runtime.video.cloud.yandex.net/player/js/player-sdk.js',
			callback: initPlayer,
		})

		return () => {
			if (playerRef.current) {
				playerRef.current.innerHTML = ''
			}
		}
	}, [])

	return <div id='video-player' ref={playerRef} />
}

export default YandexPlayer
```
