package interfaces

type Queue[T any] interface {
	PushBack(T)
	PopFront()
	Front() T
}
