import auth from "./auth";
import event from './event'
// импортируем сюда все редюсеры, чтобы не нагромождать код

// экспортируем объект со всеми нашими редюсерами
export default {
	auth,
	event
}