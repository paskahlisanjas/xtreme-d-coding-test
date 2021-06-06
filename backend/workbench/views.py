from rest_framework.decorators import api_view
from rest_framework.response import Response

from .helper import parse_arrangement, generate_message
from .service import WorkbenchService

@api_view(['POST'])
def craft_item(request):
    row_size = request.data['rowSize']
    col_size = request.data['columnSize']
    raw_arrangement = request.data['arrangement']

    arrangement = parse_arrangement(row_size, col_size, raw_arrangement)

    service = WorkbenchService()
    craftable_items, count = service.craft_item(arrangement)
    message, status = generate_message(count)

    return Response({
        'status': status,
        'message': message,
        'craftable_items': craftable_items,
    })