export declare namespace YandexCloudVideo {
	interface Sdk {
		playerApi: PlayerApi
		playerSdk: PlayerSdk
		playerSkin: PlayerSkin
		streamPlayer: StreamPlayer
	}

	interface PlayerApi {
		METHODS: string[]
		timeAPIInit: number
	}

	interface PlayerSdk {
		init(playerSdkInitConfig: PlayerSdkInitConfig): PlayerSdkApi
		preloadScripts: Function
	}

	interface PlayerSkin {
		create: Function
		preloadScripts: Function
	}

	interface StreamPlayer {
		i18nLang: string
		i18nTranslateSandbox: Function
		i18nTranslateSkin: Function
		initDebugPanel: Function
		initErrorScreen: Function
		exp: {
			flags: Record<any, any>
			flagsInited: boolean
			onFlagsInit: Function[]
			slots: any
			testids: any
		}
	}

	interface PlayerSdkSourceParams {
		autoplay?: boolean
		startPosition?: Seconds
	}

	interface PlayerSdkInitConfig extends PlayerSdkSourceParams {
		element: string | HTMLElement
		muted?: boolean
		source: string
		volume?: Volume
		hiddenControls?: string | PlayerSdkHiddenControl[]
	}

	interface PlayerSdkApi {
		destroy(): Promise<void>
		getState(): PlayerSdkState

		off<EventName extends PlayerSdkEvents>(
			eventName: EventName,
			handler: PlayerSdkEventHandlers[EventName],
		): void

		on<EventName extends PlayerSdkEvents>(
			eventName: EventName,
			handler: PlayerSdkEventHandlers[EventName],
		): void

		once<EventName extends PlayerSdkEvents>(
			eventName: EventName,
			handler: PlayerSdkEventHandlers[EventName],
		): void

		pause(): void
		play(): Promise<void>
		seek(time: Seconds): void
		setMuted(muted: boolean): void
		setSource(sourceConfig: PlayerSdkSourceConfig): Promise<void>
		setVolume(volume: Volume): void
	}

	type PlayerSdkEventHandlers = {
		CurrentTimeChange(arg: { currentTime: Nullable<Seconds> }): unknown
		DurationChange(arg: { duration: Nullable<Seconds> }): unknown
		ErrorChange(arg: {
			error: Nullable<PublicIFrameApiErrorInterface>
		}): unknown
		MutedChange(arg: { muted: boolean }): unknown
		SourceChange(arg: { source: Nullable<string> }): unknown
		StatusChange(arg: { status: PlayerSdkStatus }): unknown
		UtcStartTimeChange(arg: { utcStartTime: Nullable<number> }): unknown
		VideoTypeChange(arg: { videoType: Nullable<PlayerSdkType> }): unknown
		VolumeChange(arg: { volume: Volume }): unknown
	}

	interface PlayerSdkState {
		currentTime: Nullable<Seconds>
		duration: Nullable<Seconds>
		error: Nullable<PublicIFrameApiErrorInterface>
		muted: boolean
		source: Nullable<string>
		status: Nullable<PlayerSdkStatus>
		utcStartTime: Nullable<number>
		videoType: Nullable<PlayerSdkType>
		volume: Volume
	}

	type PlayerSdkSourceConfig = string | PlayerSdkSourceObjectConfig

	type PlayerSdkSourceObjectConfig = Pick<
		PlayerSdkInitConfig,
		'source' | 'autoplay' | 'startPosition'
	>

	interface PublicIFrameApiErrorInterface {}

	type Seconds = number

	type Volume = number

	type Nullable<T> = T | null

	type PlayerSdkEvents = keyof PlayerSdkEventHandlers

	type PlayerSdkHiddenControl =
		| '*'
		| '!play'
		| '!contextMenu'
		| '!fullscreen'
		| '!live'
		| '!mobileSeekButtons'
		| '!nextAdInfo'
		| '!playbackRate'
		| '!poster'
		| '!preloader'
		| '!settings'
		| '!startScreen'
		| '!startScreenPlay'
		| '!subtitlesToggle'
		| '!timeline'
		| '!timelinePreview'
		| '!time'
		| '!title'
		| '!sound'
		| '!volumeSlider'
		| 'play'
		| 'contextMenu'
		| 'fullscreen'
		| 'live'
		| 'mobileSeekButtons'
		| 'nextAdInfo'
		| 'playbackRate'
		| 'poster'
		| 'preloader'
		| 'settings'
		| 'startScreen'
		| 'startScreenPlay'
		| 'subtitlesToggle'
		| 'timeline'
		| 'timelinePreview'
		| 'time'
		| 'title'
		| 'sound'
		| 'volumeSlider'

	enum PlayerSdkStatus {
		idle = 'idle',
		init = 'init',
		buffering = 'buffering',
		play = 'play',
		pause = 'pause',
		end = 'end',
		fatal = 'fatal',
		broken = 'broken',
		destroyed = 'destroyed',
		cancelled = 'cancelled',
		preparing = 'preparing',
		finished = 'finished',
	}

	enum PlayerSdkType {
		undefined = 'undefined',
		VOD = 'VOD',
		EVENT = 'EVENT',
		LIVE = 'LIVE',
	}
}

declare global {
	interface Window {
		Ya: YandexCloudVideo.Sdk
	}
}

export {}
