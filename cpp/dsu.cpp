class DSU {
    private:
        int* parent;
        int* rank;
        int n;
    public:
        DSU(int n) {
            this->n = n;
            parent = new int[n + 1];
            rank = new int[n + 1];
            for (int i = 1; i <= n; ++i)
                parent[i] = i, rank[i] = 1;
        }
        ~DSU() {
            delete[] parent;
            delete[] rank;
        }
        int find(int x) {
            return x == parent[x] ? x : (parent[x] = find(parent[x]));
        }
        bool join(int x, int y) {
            x = find(x);
            y = find(y);
            if (x != y) {
                if (rank[x] > rank[y]) {
                    parent[y] = x;
                    rank[x] += rank[y];
                }
                else {
                    parent[x] = y;
                    rank[y] += rank[x];
                }
                return true;
            }
            return false;
        }
    };