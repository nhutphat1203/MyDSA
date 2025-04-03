package queue_test

import (
	"fmt"
	"testing"

	"github.com/nhutphat1203/MyDSA/go/datastructures/collections/queue"
	"github.com/stretchr/testify/require"
)

func TestArrayQueue(t *testing.T) {
	t.Parallel()
	q := queue.NewArrayQueue[int](1)
	for i := 0; i < 1000; i++ {
		q.PushBack(i)
	}
	for q.Len() != 0 {
		fmt.Print(q.Front(), " ")
		q.PopFront()
	}
	require.True(t, q.Len() == 0)
}
