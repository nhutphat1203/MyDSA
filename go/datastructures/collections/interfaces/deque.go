package interfaces

type Deque[T any] interface {
	Queue[T]
	PushFront(T)
	PopBack()
	Back() T
}
