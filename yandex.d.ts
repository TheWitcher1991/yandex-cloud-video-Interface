declare global {
	interface Window {
		Ya: Ya
	}

	interface Ya {
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
		init: (playerSdkInitConfig: PlayerSdkInitConfig) => PlayerSdkApi
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

	interface PlayerSdkInitConfig {
		autoplay?: boolean
		element: string | HTMLElement
		muted?: boolean
		source: string
		startPosition?: Seconds
		volume?: Volume
	}

	interface PlayerSdkApi {
		destroy: Promise<void>
		getState: () => PlayerSdkState
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
		pause: () => void
		play: Promise<void>
		seek: (time: Seconds) => void
		setMuted: (muted: boolean) => void
		setSource: (sourceConfig: PlayerSdkSourceConfig) => Promise<void>
		setVolume: (volume: Volume) => void
	}

	interface PlayerSdkEventHandlers {
		[PlayerSdkEvents.CurrentTimeChange]: (arg: {
			currentTime: Nullable<Seconds>
		}) => unknown
		[PlayerSdkEvents.DurationChange]: (arg: {
			duration: Nullable<Seconds>
		}) => unknown
		[PlayerSdkEvents.ErrorChange]: (arg: {
			error: Nullable<PublicIFrameApiErrorInterface>
		}) => unknown
		[PlayerSdkEvents.MutedChange]: (arg: { muted: boolean }) => unknown
		[PlayerSdkEvents.SourceChange]: (arg: {
			source: Nullable<string>
		}) => unknown
		[PlayerSdkEvents.StatusChange]: (arg: {
			status: PlayerSdkStatus
		}) => unknown
		[PlayerSdkEvents.UtcStartTimeChange]: (arg: {
			utcStartTime: Nullable<number>
		}) => unknown
		[PlayerSdkEvents.VideoTypeChange]: (arg: {
			videoType: Nullable<PlayerSdkType>
		}) => unknown
		[PlayerSdkEvents.VolumeChange]: (arg: { volume: Volume }) => unknown
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

	interface PlayerSdkSourceConfig {}

	interface PublicIFrameApiErrorInterface {}

	type Seconds = number

	type Volume = number

        type Nullable<T> = T | null

	enum PlayerSdkEvents {
		CurrentTimeChange = 'CurrentTimeChange',
		DurationChange = 'DurationChange',
		ErrorChange = 'ErrorChange',
		MutedChange = 'MutedChange',
		SourceChange = 'SourceChange',
		StatusChange = 'StatusChange',
		UtcStartTimeChange = 'UtcStartTimeChange',
		VideoTypeChange = 'VideoTypeChange',
		VolumeChange = 'VolumeChange',
	}

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

export {}
