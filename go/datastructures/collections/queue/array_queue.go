package queue

import (
	"log"

	"github.com/nhutphat1203/MyDSA/go/interfaces"
)

var grow_factor float64 = 1.32

type ArrayQueue[T any] struct {
	items []T
	len   int
	front int
	rear  int
}

var _ interfaces.Queue[int] = (*ArrayQueue[int])(nil)

func NewArrayQueue[T any](capacities ...int) *ArrayQueue[T] {
	cap := 2
	if len(capacities) > 0 {
		cap = capacities[0]
	}
	return &ArrayQueue[T]{
		items: make([]T, cap),
		len:   0,
		front: 0,
		rear:  0,
	}
}

func (q *ArrayQueue[T]) Len() int {
	return q.len
}
func (q *ArrayQueue[T]) Cap() int {
	return cap(q.items)
}
func (q *ArrayQueue[T]) PushBack(item T) {
	if q.len == q.Cap() {
		newSlice := make([]T, int(float64(q.Cap()+1.0)*grow_factor))
		for i := 0; i < q.len; i++ {
			newSlice[i] = q.items[q.front]
			q.front = (q.front + 1) % q.Cap()
		}
		q.front = 0
		q.rear = q.len
		q.items = newSlice
	}
	q.items[q.rear] = item
	q.rear = (q.rear + 1) % q.Cap()
	q.len++
}
func (q *ArrayQueue[T]) PopFront() {
	if q.len == 0 {
		log.Fatal("No item in queue")
	}
	q.front = (q.front + 1) % q.Cap()
	q.len--
	if q.len == 0 {
		q.front, q.rear = 0, 0
	}

}
func (q *ArrayQueue[T]) Front() T {
	if q.Len() == 0 {
		log.Fatal("No item to retrive")
	}
	return q.items[q.front]
}
func (q *ArrayQueue[T]) Empty() bool {
	return q.Len() == 0
}
