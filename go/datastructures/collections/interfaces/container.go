package interfaces

type Container[T any] interface {
	Len() int
	Cap() int
}
