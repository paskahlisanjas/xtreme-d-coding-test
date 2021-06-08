# Helper function to parse arrangement from FE
def parse_arrangement(row_size, col_size, raw_arrangement):
    arrangement = [['_' for __ in range(col_size)] for _ in range(row_size)]
    for key in raw_arrangement:
        row, col = key.split('|')
        arrangement[int(row)][int(col)] = raw_arrangement[key]
    return arrangement


# Helper function to generate feedback message based on the number of matched recipes
def generate_message(matched_recipes):
    if matched_recipes == 0:
        return "Failed to craft item. Workbench arrangement doesn't match any recipe.", 'FAILED'
    if matched_recipes > 1:
        return "Failed to craft item. Workbench arrangement matches multiple recipes.", 'FAILED'
    return "An item is successfully crafted!", 'SUCCESS'


# Helper function to count the number of matched submatrix inside a matrix
def count_submatrix(matrix, submatrix):
    count = 0
    for row in range(len(matrix)):
        for col in range(len(matrix[row])):
            if __bfs_check__(submatrix, matrix, row, col):
                count += 1
    return count

def __bfs_check__(submatrix, matrix, i_row, i_col):
    visited = set()
    queue = [(0, 0, i_row, i_col)]
    while queue:
        subrow, subcol, row, col = queue.pop(0)

        if (subrow, subcol) in visited:
            continue
        visited.add((subrow, subcol))

        if __is_cell_outside_boundary__(subrow, subcol, len(submatrix), len(submatrix[0])):
            if __is_cell_outside_boundary__(row, col, len(matrix), len(matrix[0])) or matrix[row][col] == '_':
                continue
            return False

        if __is_cell_outside_boundary__(row, col, len(matrix), len(matrix[0])):
            return False

        if submatrix[subrow][subcol] != matrix[row][col]:
            return False

        for item in __generate_surrounder__(subrow, subcol, row, col):
            queue.append(item)

    return True

def __is_cell_outside_boundary__(row, col, row_size, col_size):
    return row < 0 \
        or row >= row_size \
        or col < 0 \
        or col >= col_size

def __generate_surrounder__(subrow, subcol, row, col):
    return [
        (subrow - 1, subcol, row - 1, col),
        (subrow + 1, subcol, row + 1, col),
        (subrow, subcol + 1, row, col + 1),
        (subrow, subcol - 1, row, col - 1),
        (subrow + 1, subcol - 1, row + 1, col - 1),
        (subrow + 1, subcol + 1, row + 1, col + 1),
        (subrow - 1, subcol - 1, row - 1, col - 1),
        (subrow - 1, subcol + 1, row - 1, col + 1),
    ]